import style from './header.module.css'

export default function Header(){
    return(
        <div className={style.outer}>
           <h1 className={style.name}>Home</h1>
           <div className={style.footer}>
            <h4>For You</h4>
            <h4>Following</h4>
           </div>
        </div>
    )
}