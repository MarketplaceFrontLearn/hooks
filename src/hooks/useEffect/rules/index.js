import { useState, useEffect } from 'react'

const EffectRule = () => {
  const [accountName, setAccountName] = useState('Orest');
  
  useEffect(() => {
	localStorage.setItem('formData', accountName);
  }, [])
  
  const [accountDetail, setAccountDetail] = useState('Active');
  
  useEffect(() => {
	  function updateStatus() {
		document.title = accountName + ' ' + accountDetail;
	  }
	}
  );
  
  
  return (
	<>
	
	</>
  )
}
export default EffectRule;