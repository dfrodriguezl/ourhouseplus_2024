import React, {  useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { get } from "app/api";
import { ItemCatalogue } from "../models";
import CombinationDetail from "./CombinationDetail";


interface OwnProps {
    type1?: string;
    type2?: string;
    setItem1?: any;
    setItem2?: any;
    update?: number;
}

type Props = OwnProps;
const FurnitureCombinations = (props: Props) => {
    const { type1, type2, setItem1, setItem2, update } = props;
    const [itemType1, setItemType1] = useState<ItemCatalogue>();
    const [itemType2, setItemType2] = useState<ItemCatalogue>();

    const getItemsType1 = () => {
        get("/items-catalogue/" + type1)
            .then((res) => {
                const items: ItemCatalogue[] = res.data;
                const randomElement: ItemCatalogue = items[Math.floor(Math.random() * items.length)];
                setItemType1(randomElement)
                setItem1(randomElement)
            })
    }

    const getItemsType2 = () => {
        get("/items-catalogue/" + type2)
            .then((res) => {
                const items: ItemCatalogue[] = res.data;
                const randomElement: ItemCatalogue = items[Math.floor(Math.random() * items.length)];
                setItemType2(randomElement)
                setItem2(randomElement)
            })
    }

    useEffect(() => {
        if (type1 && type2) {
            getItemsType1();
            getItemsType2();
        }
    }, [update])

    return (
        <Grid container>
            {itemType1 && itemType2 ?
                <Grid item container direction="row" justifyContent="space-around">
                    <CombinationDetail item={itemType1!} />
                    <CombinationDetail item={itemType2!} />
                </Grid> : null
            }
        </Grid>
    )
}

export default FurnitureCombinations;