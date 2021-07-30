import React, { useState, useRef, useEffect} from "react"
import { TodoListFunction } from './TodoList'
import { v4 as uuidv4 } from 'uuid'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {Grid, Paper, Avatar, TextField} from '@material-ui/core'
import ListAltIcon from '@material-ui/icons/ListAlt'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const KEY = 'todoApp.todos';

const useStyles = makeStyles((theme) => {
  return {
    root: {
    flexGrow: 1,
    margin:0,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar
}
})


export function List({handleLogout, user}) {
    const [todos, setTodos] = useState([
        {id: 1, task: "Estudiar", completed: true},
    ]);

    const todoTaskRef = useRef();

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task === '') return;

        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), task, completed:false}]
        })

        todoTaskRef.current.value = null;
    }

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };

    const handleClearAll = () => {

        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);

    };

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if(storedTodos){
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos]);
      
    const classes = useStyles();
    
    const paperStyle = {padding :20, height:"64vh", width:350, margin:"20px auto"};
    const avatarStyle = {backgroundColor:'#ed2939'};

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Bienvenido {user.email}
                </Typography>
                <Button onClick={handleLogout} color="inherit">Cerrar sesión</Button>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar}></div> 
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                        <Avatar style={avatarStyle}><ListAltIcon/></Avatar>
                        <h2>Crea tu lista</h2>
                    </Grid>
                    <TodoListFunction todos={todos} toggleTodo={toggleTodo}/>        
                    <Grid container direction={"column"} spacing={2}>      
                        <Grid item>      
                            <TextField 
                                    label="Nueva tarea" 
                                    inputRef={todoTaskRef}
                                    placeholder="Ingresa una nueva tarea" 
                                    variant="filled"
                                    type="text" fullWidth required autoFocus/>      
                        </Grid>
                        <Grid container direction="row" justify="space-between" align="center">
                            <Button variant="contained" color="primary" onClick={handleTodoAdd}>Añadir   <AddCircleIcon/></Button>
                                <Grid item xs={4}>
                                    <Button variant="contained" color="secondary" onClick={handleClearAll}>Borrar   <DeleteForeverIcon/></Button>
                                </Grid>
                        </Grid>
                        <Grid item>
                            <div className="msg" align="center">
                                Te quedan {todos.filter((todo) => !todo.completed).length} tarea(s) por realizar.
                            </div>    
                        </Grid>
                    </Grid>                             
                </Paper>
            </Grid>       
        </div>
    
    );

}