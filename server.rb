require "sinatra"
require "sinatra/json"
require "json"
require "pry"

# You should not need to change the code in this file

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/app/views"

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

# GET ARTICLES FROM TASKS.JSON
def read_tasks
  JSON.parse(File.read("tasks.json"))
end

# API ENDPOINTS
get "/api/v1/tasks" do
  tasks = read_tasks

  content_type :json
  json tasks
end

post "/api/v1/tasks" do
  current_tasks = read_tasks

  new_task = {}
  task_name = request.body.read
  new_task["id"] = current_tasks["tasks"].last["id"] + 1
  new_task["name"] = task_name

  current_tasks["tasks"] << new_task
  File.write("tasks.json", JSON.pretty_generate(current_tasks))

  content_type :json
  status 201
  json new_task
end

# SINATRA VIEWS ROUTES
get "/" do
  erb :index
end
