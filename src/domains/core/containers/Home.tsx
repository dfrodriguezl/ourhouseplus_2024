import React, { Fragment, useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Container
} from '@mui/material';
import { HomeSub, PageContainer, } from 'domains/core/containers';
import { useAuth0 } from '@auth0/auth0-react';
import { Article, ArticlesCategory } from '../models';
import { get } from 'app/api';
import { Link } from 'react-router-dom';


const Home = () => {
  const { isAuthenticated, user } = useAuth0();
  const isAdmin = isAuthenticated ? user!['http://ourhouseplus.com/roles'].includes('admin') : false;
  const [articles, setArticles] = useState<Article[]>([]);


  useEffect(() => {
    get('/articles').then((response) => {
      setArticles(response.data.Items);
    })
  }, [user])

  return (
    <Fragment>
      <PageContainer>
        <Container sx={{ paddingTop: 19, paddingBottom: 7, }}>
          <Grid container spacing={4} justifyContent="center">
            {articles.map((article) => (
              <Grid item xs={12} sm={6} md={4} key={article.articleId}>
                <Card component={Link} to={`/storyblog?id=${article.articleId}`} sx={{ textDecoration: 'none', color: 'inherit', boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    image={article.mainImage}
                    alt="article_image"
                    sx={{ aspectRatio: '4/3', objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ marginBottom: 1, color: 'rgba(0, 0, 0, 0.6)' }}>
                      {ArticlesCategory[article.category]}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'regular', marginBottom: 1 }}>
                      {article.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                      {article.excerpt}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </PageContainer>
      {isAdmin ?
        <HomeSub /> : null}
    </Fragment>
  );
}

export default Home;
