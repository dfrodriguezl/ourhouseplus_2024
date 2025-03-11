import React, { Fragment } from 'react';
import { 
  Grid, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  useMediaQuery, 
  useTheme, 
  Container } from '@mui/material';
import { HomeSub, PageContainer, } from 'domains/core/containers';
import { useAuth0 } from '@auth0/auth0-react';
import { kyotoHouse, heritageHouse, singaporeHouse } from 'assets';


interface OwnProps {}

const articles = [
  {
    id: 1,
    title: "Heritage Meets Contemporary Hospitality at Melbourne Place",
    category: "Wanderlust",
    excerpt: "Kennedy Nolan has crafted a cohesive vision where colours, craft and urban context converge",
    image: heritageHouse,
    alt: "Heritage House",
    link: "#"
  },
  {
    id: 2,
    title: "In this Singapore House, Walls Twist and Turn",
    category: "Home",
    excerpt: "Ming Architects employed the leitmotif of curves to bring interest and natural light",
    image: singaporeHouse,
    alt: "Singapore House",
    link: "#"
  },
  {
    id: 3,
    title: "A Gallery Owner's Kyoto Retreat Becomes a Study in Light",
    category: "Home",
    excerpt: "Kyoto-based designer Ryo Shimada undertook a sensitive renovation",
    image: kyotoHouse,
    alt: "Kyoto Retreat",
    link: "#"
  }
];

type Props = OwnProps;
const Home = (props: Props) => {
  const { isAuthenticated, user } = useAuth0();
  const isAdmin = isAuthenticated ? user!['http://ourhouseplus.com/roles'].includes('admin') : false;
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Fragment>
      <PageContainer>
        <Container sx={{ paddingTop: 19, paddingBottom: 7, }}>
          <Grid container spacing={4} justifyContent="center">
            {articles.map((article) => (
              <Grid item xs={12} sm={6} md={4} key={article.id}>
                <Card component="a" href={article.link} sx={{ textDecoration: 'none', color: 'inherit', boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    image={article.image}
                    alt={article.alt}
                    sx={{ aspectRatio: '4/3', objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ marginBottom: 1, color: 'rgba(0, 0, 0, 0.6)' }}>
                      {article.category}
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
