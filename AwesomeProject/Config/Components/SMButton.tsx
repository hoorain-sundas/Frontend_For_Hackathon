import { Text, TouchableOpacity } from 'react-native';
import styles from '../../styles';
function SMButton(props: any) {
    const {label, onPress, disabled} = props;
  return (
    <>
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <Text style={[styles.textCenter,styles.btn, styles._white]}>{label}</Text>
        </TouchableOpacity>
    </>
  )
}

export default SMButton;
