import React from "react";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Paper from "@material-ui/core/Paper";

export default function Excercises({ topsix }) {
  return (
    <Paper>
      <GridList>
        <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
          <ListSubheader component="div">
            Reserviere in deiner Nähe!
          </ListSubheader>
        </GridListTile>
        {topsix.map(tile => (
          <GridListTile key={tile.name} cols={0.655} rows={0.655}>
            <img src={tile.id} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
              subtitle={<span>by: {tile.bild}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.name}`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </Paper>
  );
}
