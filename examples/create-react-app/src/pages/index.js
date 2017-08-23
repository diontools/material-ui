// @flow

import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import withRoot from '../components/withRoot';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 64,
  },
  flex: {
    flex: 1,
  },
};

class Index extends Component {
  state = {
    open: false,
	drawerOpen: false,
  };

  toggleDrawer = (side, drawerOpen) => {
    const drawerState = {};
    drawerState[side] = drawerOpen;
    this.setState({ drawerOpen: drawerState });
  };
  
  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };
  
  handleLeftOpen = () => this.toggleDrawer('left', true);
  handleLeftClose = () => this.toggleDrawer('left', false);

  render() {
    return (
      <div style={styles.container}>
		  <AppBar position="fixed">
			<Toolbar>
			  <IconButton color="contrast" aria-label="Menu" onClick={this.handleLeftOpen}>
				<MenuIcon />
			  </IconButton>
			  <Typography type="title" color="inherit" className={styles.flex}>
				Title
			  </Typography>
			  <Button color="contrast">Login</Button>
			</Toolbar>
		  </AppBar>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleRequestClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography type="display1" gutterBottom>
          Material-UI
        </Typography>
        <Typography type="subheading" gutterBottom>
          example project
        </Typography>
        <Button raised color="accent" onClick={this.handleClick}>
          Super Secret Password
        </Button>
		
      <Typography type="display4" gutterBottom>
        Display 4
      </Typography>
      <Typography type="display3" gutterBottom>
        Display 3
      </Typography>
      <Typography type="display2" gutterBottom>
        Display 2
      </Typography>
      <Typography type="display1" gutterBottom>
        Display 1
      </Typography>
      <Typography type="headline" gutterBottom>
        Headline
      </Typography>
      <Typography type="title" gutterBottom>
        Title
      </Typography>
      <Typography type="subheading" gutterBottom>
        Subheading
      </Typography>
      <Typography type="body2" gutterBottom>
        Body 2
      </Typography>
      <Typography type="body1" gutterBottom align="right">
        Body 1
      </Typography>
      <Typography type="caption" gutterBottom align="center">
        Caption
      </Typography>
      <Typography gutterBottom noWrap>
        {`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `}
      </Typography>
      <Typography type="button" gutterBottom>
        Button
      </Typography>
		
        <Drawer
          open={this.state.drawerOpen.left}
          onRequestClose={this.handleLeftClose}
          onClick={this.handleLeftClose}
        >
			<List>
				<ListItem button>
				  <ListItemIcon>
					<InboxIcon />
				  </ListItemIcon>
				  <ListItemText primary="Inbox" />
				</ListItem>
				<ListItem button>
				  <ListItemIcon>
					<StarIcon />
				  </ListItemIcon>
				  <ListItemText primary="Starred" />
				</ListItem>
				<ListItem button>
				  <ListItemIcon>
					<SendIcon />
				  </ListItemIcon>
				  <ListItemText primary="Send mail" />
				</ListItem>
				<ListItem button>
				  <ListItemIcon>
					<DraftsIcon />
				  </ListItemIcon>
				  <ListItemText primary="Drafts" />
				</ListItem>
			</List>
        </Drawer>
      </div>
    );
  }
}

export default withRoot(Index);
