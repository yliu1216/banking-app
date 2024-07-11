import React from "react";
import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import RightSidebar from "@/components/ui/RightSidebar";

const Home = () => {
  const LoggedIn = {firstName: 'Yingwei', lastName:"Liu", email:'love@gmail.com'};
  return(
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={LoggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transcations efficiently" 
          />
          <TotalBalanceBox
              accounts={[]}
               totalBanks={1}
               totalCurrentBalance={1250.555}
          />
         
        </header>

        RECENT TRANSCATIONS
      </div>
      <RightSidebar user={LoggedIn}  transactions={[]} banks={[{currentBalance: 123.50}, {currentBalance: 260.87}]}/>
    </section>
  )
}

export default Home