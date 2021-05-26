using TodoApi.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace TodoApi.Services
{
    public class TodoService
    {
        private readonly IMongoCollection<TodoItemDTO> _todo;

        public TodoService(ITodoDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _todo = database.GetCollection<TodoItemDTO>(settings.TodoCollectionName);
        }

        public List<TodoItemDTO> Get() =>
            _todo.Find(todo => true).ToList();

        public TodoItemDTO Get(string id) =>
            _todo.Find<TodoItemDTO>(todo => todo.Id == id).FirstOrDefault();

        public TodoItemDTO Create(TodoItemDTO todo)
        {
            _todo.InsertOne(todo);
            return todo;
        }

        public void Update(string id, TodoItemDTO todoIn) =>
            _todo.ReplaceOne(todo => todo.Id == id, todoIn);

        public void Remove(TodoItemDTO todoIn) =>
            _todo.DeleteOne(todo => todo.Id == todoIn.Id);

        public void Remove(string id) => 
            _todo.DeleteOne(todo => todo.Id == id);
    }
}