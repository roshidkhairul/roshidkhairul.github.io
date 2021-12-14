    
            let tip;
            let bill;
            
            bill = prompt("Enter the bill");
            
            bill >=30 && bill<=300 ? tip = (15/100)*bill : tip = (20/100)*bill
            
            console.log(`The bill was ${bill}, the tip was ${tip}, and the final value ${parseFloat (bill)+parseFloat(tip)}`)