document.getElementById('deposite-btn').addEventListener('click',function(){

    // deposite amount 
   const deposite= document.getElementById('deposite-input')
   const newDeposite=parseFloat(deposite.value)
   const previousDeposite=parseFloat(document.getElementById('total-deposite').innerText)
   const totalDeposite=document.getElementById('total-deposite').innerText=newDeposite+previousDeposite

  //    deposite amount to main balance 
  const mainBalance=document.getElementById('main-balance')
  const previousBalance=parseFloat(mainBalance.innerText)
  const newBalance=newDeposite+previousBalance
  mainBalance.innerText=newBalance
  deposite.value=''


   
})


document.getElementById('withdraw-btn').addEventListener('click',function(){ 
    const getWithdraw =document.getElementById('withdraw')
    const widhdrawAmount=getWithdraw.value
    const withdraw=document.getElementById('withdraw-amount')
    const totalWithdraw=parseFloat(withdraw.innerText)
    console.log(totalWithdraw)
    const totalWithdrawAmount=parseFloat(widhdrawAmount)+totalWithdraw
    withdraw.innerText=totalWithdrawAmount


    // main balance after withdraw
   
    const mainBalance=document.getElementById('main-balance')
    const previousBalance=parseFloat(mainBalance.innerText)
    const newBalance=previousBalance-parseFloat(widhdrawAmount)
    mainBalance.innerText=newBalance
    getWithdraw.value=''
    

    
})