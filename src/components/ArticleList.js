import React from 'react'
import Article from './Article'


function ArticleList({posts}) {
    const articleComp = posts.map((oneArticle) => {
        return (<Article 
        key={oneArticle.id}
        title={oneArticle.title}
        date={oneArticle.date}
        preview={oneArticle.preview}
        />
        )
    })
  return (
    <div>
        <main>
            {articleComp}
        </main>
    </div>
  )
}

export default ArticleList