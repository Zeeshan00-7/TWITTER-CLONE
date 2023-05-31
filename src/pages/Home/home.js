import React from 'react'
import style from './home.module.css'

export default function Home(){
  return(
    <div className={style.outer}>
        <aside className={style.nav}>

        </aside >

        <section className={style.feed}>
            <header className={style.header}>
              <h1>this is nav</h1>
            </header>
        </section>

        <aside className={style.hashtag}>

        </aside>
    </div>
  )
}