import React from 'react';
import {Article} from '../Article/index';

interface IArticleList {
    articles: any[]
}

export class ArticleList extends React.Component<IArticleList>  {
    
    render() {
        return (
            (this.props.articles as any[]).map(article => {
                return <Article key={article.id} article={article} />
            })
        )
    }
}