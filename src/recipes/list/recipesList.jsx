import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

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

function RecipesList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState();

  return (
    <div>
    <List className={classes.root}>
    {[0, 1, 2, 3].map( (value) =>
        <div>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Grilled Chicken"
              secondary={<React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Really Good Chicken
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