import React from 'react'
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSideBar';


const Home = () => {
  const loggedIn={firstName : 'Darshan' , lastName : 'Thorat' , email:'darshanthorat2003@gmail.com'};
  return (
    <section className='home'>
        <div className='home-content'>
        <header className='home-header'>
        <HeaderBox
         type="greeting"
         title="Welcome"
         user={loggedIn?.firstName || 'Guest'}
         subtext="Acess and Manage your Transactions Efficiently"
        />
        <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}/>
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn}
      transactions={[]}
      banks={[{currentBalance : 123.50},{currentBalance : 140.50}]}
      />
    </section>
  )
}

export default Home
