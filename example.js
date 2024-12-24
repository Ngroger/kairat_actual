const axios = require('axios');

// FCM серверный ключ
const FCM_SERVER_KEY = 'ycKdQ2-D3pzJythg2RA1nN4aGOVIBtzhmmtysSI5kzs';

// Функция отправки уведомлений
async function sendPushNotification(expoPushToken, title, body) {
  try {
    const message = {
      to: expoPushToken, // Expo Push Token
      notification: {
        title: title,
        body: body,
      },
      data: {
        extraData: 'extra data here',
      },
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${FCM_SERVER_KEY}`,
    };

    // Отправка уведомления через Firebase Cloud Messaging (FCM)
    const response = await axios.post(
      'https://fcm.googleapis.com/fcm/v1/send',
      { message },
      { headers }
    );

    console.log('Push notification sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending push notification:', error);
  }
}

// Пример использования
const expoPushToken = 'your-expo-push-token'; // Здесь должен быть экспо токен
sendPushNotification(expoPushToken, 'Test Notification', 'This is a test message');
