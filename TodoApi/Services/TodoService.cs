using TodoApi.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace TodoApi.Services
{
    public class TodoService
    {
        private readonly IMongoCollection<TodoItem> _todo;

        public TodoService(ITodoDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _todo = database.GetCollection<TodoItem>(settings.TodoCollectionName);
        }

        public List<TodoItem> Get() =>
            _todo.Find(todo => true).ToList();

        public TodoItem Get(string id) =>
            _todo.Find<TodoItem>(todo => todo.Id == id).FirstOrDefault();

        public TodoItem Create(TodoItem todo)
        {
            _todo.InsertOne(todo);
            return todo;
        }

        public void Update(string id, TodoItem todoIn) =>
            _todo.ReplaceOne(todo => todo.Id == id, todoIn);

        public void Remove(TodoItem todoIn) =>
            _todo.DeleteOne(todo => todo.Id == todoIn.Id);

        public void Remove(string id) => 
            _todo.DeleteOne(todo => todo.Id == id);
    }
}