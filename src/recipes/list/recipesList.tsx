import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { SearchResult } from "../models/searchResult"

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
    maxWidth: "36ch",
    paddingBottom: "0",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  image: {
      borderRadius: "5%"
  }
}));
interface Props  {
  results: SearchResult[];
 }

function RecipesList(props: Props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState();

  return (
    <div>
        <List className={classes.root}>
          {props.results.map( (result) =>
              <div>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={result.name}
                    secondary={<React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        { result.description }
                      </Typography>
                    </React.Fragment>} />
                  <div>
                    <img className={classes.image} src="https://via.placeholder.com/150C/O https://placeholder.com/" />
                  </div>
                </ListItem>
                <Divider component="li" />
              </div>
            )}
      </List>
    </div>
  );
}
  
export default RecipesList;