const btn=document.getElementById("check");
const date=document.getElementById("date");
const age=document.getElementById("age");
const calculate=document.querySelector(".calculator");
const dob_detail=document.getElementById("detail");
console.log(calculate)




btn.addEventListener("click",()=>{

    let dob=date.value; 
    let dob_year=parseInt(dob.slice(0,4));
    let dob_mont=parseInt(dob.slice(5,7)); 
    let dob_date=parseInt(dob.slice(8,10));

    let crtdate=new Date();
    let crt_year=crtdate.getFullYear();
    let crt_month=crtdate.getMonth();
    let crt_day=crtdate.getDate();

    let age_year=Math.abs(crt_year-dob_year);
    let age_mont=Math.abs(crt_month-dob_mont);
    let age_day=Math.abs(crt_day-dob_date);
    
    dob_detail.innerHTML=`You are <span id="years">${age_year}</span> years ,<span id="mont">${age_mont}</span> Monts and <span id="day">${age_day}</span> days old. `
    

    
})

// let crtdate=new Date();
//     let crt_year=crtdate.getFullYear();
//     let crt_month=crtdate.getMonth();
//     let crt_day=crtdate.getDate();

