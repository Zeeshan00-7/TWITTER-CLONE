import React from 'react'
import style from './home.module.css'
import Card from '../../molecules/home/Card'
import Header from '../../molecules/home/header';
import Tweet from '../../molecules/home/tweet';

export default function Home(){
  return(
    <div className={style.outer}>
        <aside className={style.nav}>

        </aside >
      


        <section className={style.feed}>
            <header className={style.header}>
               <Header />
            </header>
            <Tweet/>
            <Card />
        </section>
         


        <aside className={style.hashtag}>

        </aside>
    </div>
  )
}