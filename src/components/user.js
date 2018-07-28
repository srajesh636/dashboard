import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  button: {
    backgroundColor: "#2196f3",
    float: "right",
    marginBottom: 20,
    width: 36,
    height: 36,
    marginLeft: 20,
    color: "white"
  },
  tableButton: {
    backgroundColor: "#636e72",
    float: "left",
    marginBottom: 20,
    width: 36,
    height: 36,
    marginLeft: 28
  }
});

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name_value: "",
      company_value: "",
      phone_value: "",
      address_value: "",
      user_data: [
        {
          name: "sai",
          company: "neetable",
          phone: "123",
          address: "xyz"
        }
      ]
    };
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleAddForm = () => {
    let new_data = {
      name: this.state.name_value,
      company: this.state.company_value,
      phone: this.state.phone_value,
      address: this.state.address_value
    };
    let new_user_data = [...this.state.user_data, new_data];
    this.setState({
      user_data: new_user_data
    });
  };

  handleClose = () => {
    this.setState({ open: false }, () => {
      this.handleAddForm();
    });
  };
  render() {
    const { classes } = this.props;
    const { user_data } = this.state;

    return (
      <div>
        <Button
          variant="contained"
          onClick={this.handleClickOpen}
          className={classes.button}
        >
          Add
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add New Users</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter All The Details</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="email"
              fullWidth
              onChange={e => {
                this.setState({
                  name_value: e.target.value
                });
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Phone"
              type="email"
              fullWidth
              onChange={e => {
                this.setState({
                  company_value: e.target.value
                });
              }}
            />{" "}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Company"
              type="email"
              fullWidth
              onChange={e => {
                this.setState({
                  phone_value: e.target.value
                });
              }}
            />{" "}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Address"
              type="email"
              fullWidth
              onChange={e => {
                this.setState({
                  address_value: e.target.value
                });
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell numeric>Company</TableCell>
                <TableCell numeric> Phone </TableCell>
                <TableCell numeric> Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user_data.map((n, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {n.name}
                    </TableCell>
                    <TableCell numeric>{n.company}</TableCell>
                    <TableCell numeric>{n.phone}</TableCell>
                    <TableCell numeric>{n.address}</TableCell>
                    <TableCell>
                      <Button
                        variant="fab"
                        color="secondary"
                        aria-label="Edit"
                        className={classes.tableButton}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        variant="fab"
                        color="secondary"
                        aria-label="Edit"
                        className={classes.tableButton}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

Users.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Users);
