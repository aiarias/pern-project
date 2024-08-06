import { Card, Input, Textarea, Label, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createTaskRequest } from "../api/tasks.api";
import {useState} from 'react'


function TaskFormPage() {
  const { register, handleSubmit, formState: {
    errors
  } } = useForm();
  const [postError, setPostError] = useState([])
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {

    try {
      const res = await createTaskRequest(data)
      navigate('/tasks')
      
    } catch (error) {
      if (error.response) {
        setPostError([error.response.data.message])
      }
      
    }

  })
  return (
    <div  className="flex h-[80vh] justify-center items-center">
      <Card>
        {
          postError.map((error, i) => (
            <p className="text-red-500" key={i}>{error}</p>
          ))
        }
        <h2 className="text-3xl font-bold my-4 ">Create Task</h2>
        <form onSubmit={onSubmit}>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            placeholder="Title"
            autoFocus
            {...register("title", {
              required: true,
            })}
          />

          {
            errors.title && <span className="text-red-500">Title is requerid</span>
          }

          <Label htmlFor="description">Description</Label>
          <Textarea
            placeholder="Description"
            rows={3}
            {...register("description")}
          />

          <Button>Create</Button>
        </form>
      </Card>
    </div>
  );
}

export default TaskFormPage;
