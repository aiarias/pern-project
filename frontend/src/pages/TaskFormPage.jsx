import { Card, Input, Textarea } from "../components/ui"

function TaskFormPage() {
    return (
        <div>

            <Card>
                <form>
                    <Input type="text" placeholder="Title" />
                    <Textarea type="text" placeholder="Description" />

                </form>
            </Card>




        </div>
    );
}

export default TaskFormPage;