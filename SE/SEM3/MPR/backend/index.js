const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors') 
const http = require("http")
const {Server} =require("socket.io")


connectToMongo();
const app = express()
const port = 5000

const server=http.createServer(app)


app.use(cors())
app.use(express.json())
app.use(express.static('uploads'))
// app.use('/public', express.static('public'));
app.use(express.static('../MeSaynger/dist'));
app.use(express.static('../data/chat-data.js'));

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.use('/api/images', require('./routes/images'))


class Graph {
  constructor() {
    this.nodes = new Map(); // Using a Map for better performance
  }

  addNode(value) {
    if (!this.nodes.has(value)) {
      this.nodes.set(value, []);
    }
  }

  addEdge(source, destination) {
    if (!this.nodes.has(source) || !this.nodes.has(destination)) {
      throw new Error("Source or destination node does not exist.");
    }

    this.nodes.get(source).push(destination);
  }

  removeNode(node) {
    if (this.nodes.has(node)) {
      this.nodes.delete(node);
      // Remove any edges that connect to this node
      for (const [key, neighbors] of this.nodes.entries()) {
        this.nodes.set(key, neighbors.filter((neighbor) => neighbor !== node));
      }
    }
  }

  removeEdge(source, destination) {
    if (this.nodes.has(source)) {
      this.nodes.set(
        source,
        this.nodes.get(source).filter((neighbor) => neighbor !== destination)
      );
    }
  }

  getNeighbors(node) {
    if (this.nodes.has(node)) {
      return this.nodes.get(node);
    }
    return null;
  }

  hasNode(node) {
    return this.nodes.has(node);
  }

  print() {
    for (const [node, neighbors] of this.nodes.entries()) {
      console.log(`${node} -> ${neighbors.join(', ')}`);
    }
  }
}

// // Example usage:
// const myGraph = new Graph();
// myGraph.addNode("A");
// myGraph.addNode("B");
// myGraph.addNode("C");
// myGraph.addNode("D");
// myGraph.addEdge("A", "B");
// myGraph.addEdge("A", "C");
// myGraph.addEdge("C", "D");
// myGraph.print();

// myGraph.removeNode("A");
// console.log("After removing node A:");
// myGraph.print();

// myGraph.addEdge("B", "C");
// myGraph.removeEdge("B", "C");
// console.log("After removing edge from B to C:");
// myGraph.print();


// Usage:
const RoomMap = new Graph();

const io = new Server(server,{
  cors:{
    origin:"*",
    // origin:"http://127.0.0.1:5173",
    methods:["GET","POST"],

  }
})

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });
  socket.on("send_message", (data) => {
    console.log({data})
    socket.to(data.room).emit("receive_message", data);
  });
  
  socket.on('leave_room', (data) => {
    socket.leave(data);
        
  });


});


server.listen(port, () => {
  console.log(`W.M.A backend listening at http://localhost:${port}`)
})