import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 100000000,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    position: 'absolute',
    zIndex: 10000000000,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
  },
  closeButton: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  },
  form: {
    width: '100%',
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginTop: 24,
    paddingHorizontal: 24
  },
  title: {
    fontSize: 20,
    fontFamily: 'MulishBold'
  },
  field: {
    width: '100%',
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FECC01',
    marginTop: 16,
    paddingHorizontal: 12
  },
  fieldTitle: {
    fontSize: 16,
    fontFamily: 'MulishRegular',
    backgroundColor: '#FFF',
    position: 'absolute',
    paddingHorizontal: 4,
    zIndex: 100,
    marginTop: -10,
    marginLeft: 12,
    color: '#535353'
  },
  input: {
    fontSize: 18,
    fontFamily: 'MulishRegular',
    color: '#000',
    width: '100%'
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FECC01',
    borderRadius: 8,
    marginTop: 24,
    padding: 16
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'MulishBlack'
  },
  error: {
    fontFamily: 'MulishRegular',
    textAlign: 'center',
    fontSize: 16,
    color: '#8B0000',
    marginTop: 4
  }
});

export default styles;