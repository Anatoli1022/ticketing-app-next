'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const EditTicketForm = () => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const startingTicketData = {
    title: '',
    description: '',
    priority: 1,
    progress: '0',
    status: 'not started',
    category: 'Hardware problem',
  };

  const [formData, setFormData] = useState(startingTicketData);

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <div className="flex justify-center ">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onClick={handleSubmit}
      >
        <h3>Create Ticket </h3>
        <label htmlFor="">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label htmlFor="">Description</label>
        <textarea
          type="text"
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />{' '}
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware problem">Hardware problem</option>
          <option value="Software problem">Software problem</option>
          <option value="Project problem">Project problem</option>
        </select>{' '}
        <label>Priority</label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>{' '}
          <input
            type="radio"
            id="priority-2"
            name="priority"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>{' '}
          <input
            type="radio"
            id="priority-3"
            name="priority"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>{' '}
          <input
            type="radio"
            id="priority-4"
            name="priority"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>{' '}
          <input
            type="radio"
            id="priority-5"
            name="priority"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not started</option>{' '}
          <option value="started">Not started</option>{' '}
          <option value="done">done</option>
        </select>
        <input type="submit" className="btn max-w-xs" value="Create Ticket" />
      </form>
    </div>
  );
};

export default EditTicketForm;
