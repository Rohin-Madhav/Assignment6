
function calculateSalary(basicSalary){
    let da,hra,pf;

    if (basicSalary < 10000){
        da = 0.25 * basicSalary;
        hra = 0.30 * basicSalary;
        pf = 0.08 * basicSalary;
    }else if(basicSalary < 20000){
        da = 0.20 * basicSalary;
        hra = 0.25 * basicSalary;
        pf = 0.06 * basicSalary;
    }else if(basicSalary <30000){
        da = 0.15 * basicSalary;
        hra = 0.20 * basicSalary;
        pf = 0.04 * basicSalary;
    }else{
        da =0.10 * basicSalary;
        hra = 0.15 * basicSalary;
        pf = 0.02 * basicSalary;
    }
    
    const netSalary = basicSalary + da + hra - pf

    console.log(`basic Salary :\u20B9${basicSalary.toFixed(2)}`);
    console.log(`DA : \u20B9${da.toFixed(2)}`);
    console.log(`HRA : \u20B9${hra.toFixed(2)}`);
    console.log(`PF : \u20B9${pf.toFixed(2)}`);
    console.log(`Net salary : \u20B9${netSalary.toFixed(2)}`);

}

const basicSalary =parseFloat(prompt('Enter Your Basic Salary :'))
calculateSalary(basicSalary);
