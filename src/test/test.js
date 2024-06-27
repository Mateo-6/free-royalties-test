import React from "react";
import { shallow, mount } from "enzyme";
import Modal from "../pages/main";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { DialogTrigger } from "../components/ui/dialog";
import { act } from "react"; 

describe("Modal", () => {
  it("renders without crashing", () => {
    shallow(<Modal />);
  });

  it("opens dialog when trigger is clicked", () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find(DialogTrigger).exists()).toBeTruthy();
    wrapper.find(DialogTrigger).simulate("click");
    expect(wrapper.find("DialogTitle").text()).toBe("Add your new question");
  });

  it("updates title state on title input change", async () => {
    const wrapper = shallow(<Modal />);
    const titleInput = wrapper.find('#title');
    titleInput.simulate('change', { target: { value: 'New Title' } });

    expect(wrapper.find('#title').prop('value')).toBe('New Title');
  });

  it("adds new question when add question button is clicked", () => {
    const wrapper = shallow(<Modal />);
    const titleInput = wrapper.find(Input);
    titleInput.simulate("change", { target: { value: "New Title" } });

    wrapper.find(Button).simulate("click");
    expect(wrapper.find("Question").exists()).toBeTruthy();
  });
});