import React, { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppSelector } from "app/hooks";
import { PageContainer } from ".";
import { Container, Grid } from "@mui/material";
import { Slogan } from "domains/common/components";
import ItemListSearch from "../components/ItemListSearch";

const Search = () => {
    const { isAuthenticated, user } = useAuth0();
    const isAdmin = isAuthenticated ? user!['http://ourhouseplus.com/roles'].includes('admin') : false;
    const currentProject = useAppSelector((state) => state.currentProject);
    const currentRoom = useAppSelector((state) => state.currentRoom);

    return (
        <Fragment>
            <PageContainer background="home">
                <Grid container justifyContent="center">
                    <Grid item container xs={12} direction="row">
                        <Grid item xs={12} style={{ alignSelf: 'flex-start' }}>
                            <Slogan />
                        </Grid>
                    </Grid>
                </Grid>
            </PageContainer>
            {isAdmin ?
                currentProject ?
                    <div>
                        <Container maxWidth="xl">
                            <Grid container direction="row">
                                <ItemListSearch room={currentRoom!} />
                            </Grid>
                        </Container>
                    </div> :
                    null : null}
        </Fragment>
    );
}

export default Search;