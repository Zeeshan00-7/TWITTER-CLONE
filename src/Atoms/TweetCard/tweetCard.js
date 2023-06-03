import style from './tweetCard.module.css'

export default function TweetCard({user}){

    const {name,username,desc,image,id} = user;
   
      return(
          <div className={style.card}>
              <header className={style.head} key={id}>
                  <div>
                  <div className={style.userImageContainer}><img src={image} alt='op'/></div>
                  </div>
                  < div>
                  <div className={style.user}>
                  <h3>{name}</h3> <p>@{username}</p>
                  </div>
                  <p>{desc}</p>
                  </div>
              </header>
              </div>)
}