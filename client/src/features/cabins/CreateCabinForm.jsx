import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";


function CreateCabinForm() {
  const { register , handleSubmit , reset , getValues , formState} = useForm();

  const { errors } = formState;
  const queryClient = useQueryClient();

  const { mutate , isLoading : isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('New cabin successfully created');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  
  function onSubmit(data){
     mutate(  { ...data , image : data.image[0]  } )
    // mutate(data)
  }

  function onError(errors){
    // console.log(errors);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit , onError)}>
      
      <FormRow label='Cabin name' error={errors?.name?.message}>
      <Input type="text" id="name" disabled={isCreating} {...register("name" , {
          required: "Name field is required"
        })}/>
      </FormRow>

      <FormRow label='Max Capacity' error={errors?.maxCapacity?.message}>
      <Input type="number" id="maxCapacity" disabled={isCreating}  {...register("maxCapacity" , {
          required: "Max Capacity field is required"
        })}/>
      </FormRow>

      <FormRow label='Regular price' error={errors?.regularPrice?.message}>
      <Input type="number" id="regularPrice" disabled={isCreating}  {...register("regularPrice" , {
          required: "Regular price field is required"
        })}/>
      </FormRow>

      <FormRow label='Discount' error={errors?.discount?.message}>
      <Input type="number" id="discount" disabled={isCreating}  defaultValue={0} {...register("discount" , {
          required: "Discount field is required",
          validate:(value) =>  Number(value) <= Number(getValues().regularPrice) || "Discount should be less than regular price",
        })}/>
      </FormRow>

      <FormRow label='Description for website' error={errors?.description?.message}>
      <Textarea type="text" id="description" defaultValue="" disabled={isCreating}  {...register("description" , {
          required: "Description field is required"
        })}/>
      </FormRow>

      <FormRow label='Cabin photo' error={errors?.description?.message}>
        <FileInput id="image" accept="image/*" {...register("image", {
          required: "image field is required"
        })}/>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add Cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
