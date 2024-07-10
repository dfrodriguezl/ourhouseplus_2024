import React, { useEffect, useState } from 'react';
import { PageContainer } from '.';
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ItemCatalogue } from '../models';
import { get } from 'app/api';
import { useAuth0 } from '@auth0/auth0-react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardFavorite from '../components/CardFavorite';

const Favorites = () => {
    const { user, isAuthenticated } = useAuth0();
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [listGroup, SetListGroup] = useState<any[]>([]);

    const getAllFavoritesByUser = () => {
        const userEmail = user?.email;
        get("/favorites/user/" + userEmail).then((response) => {
            getAllItemCatalogue().then((response2) => {
                makeJoinByIdItem(response.data.Items, response2)
            })
        })
    }

    const getAllItemCatalogue = () => {
        return get("/items-catalogue").then((response) => {
            return response.data.Items
        })
    }

    const makeJoinByIdItem = (favorites: any, items: any) => {
        if (favorites.length > 0 && items.length > 0) {
            const matchList = favorites.map((favorite: any) => {
                return items.filter((ic: any) => ic.idItem === favorite.idItem)[0];
            }, []);

            const listGroupByFurnitureType = regroupByCategory(matchList);
            SetListGroup(listGroupByFurnitureType);

        }
    }

    const regroupByCategory = (jsonArray: any) => {
        const grouped: any = {};

        // Iterate over the array
        jsonArray.forEach((item: any) => {
            if (item !== undefined) {
                if (!grouped[item.furniture_type]) {
                    grouped[item.furniture_type] = [];
                }

                // Push the item into the array
                grouped[item.furniture_type].push(item);
            }

        });

        return grouped;
    }

    useEffect(() => {
        getAllFavoritesByUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PageContainer background="create-project">
            {isAuthenticated ?
                smallScreen ?
                    <Grid item container direction="column" alignContent="center" textAlign="center">
                        <Typography>FAVORITES</Typography>
                        <Box>
                            <StarBorderIcon fontSize='large' />
                        </Box>
                        <Box width="100%">
                            {listGroup ?
                                Object.keys(listGroup).map((element: any, index) => {
                                    return (
                                        <Accordion key={index}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}>
                                                <Grid container direction="row" justifyContent="space-around">
                                                    <Typography>
                                                        {element}
                                                    </Typography>
                                                    <Typography>{listGroup[element].length}</Typography>
                                                </Grid>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                {listGroup[element].length > 1 ?
                                                    listGroup[element].map((item: ItemCatalogue, index: number) => {
                                                        return (
                                                            <CardFavorite item={item} key={index}/>
                                                        )
                                                    })
                                                    : null}
                                            </AccordionDetails>
                                        </Accordion>
                                    )
                                })
                                : null}
                        </Box>
                    </Grid>
                    : null : null}
        </PageContainer>
    )
}

export default Favorites;