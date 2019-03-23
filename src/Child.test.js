/**
 * Child.test.js - simple testing file
 * tested a component is rendered successfully or not by SNAPSHOT Testing
 * tested a state value from initial period
 * tested a textContent value by using find and text
 * tested a click event using mount(which gave us the DOM Representation of the component to do test event)
 */

import Child from "./Child"

describe("Todos Component", () => {  
  it("renders correctly", () => {
    const wrapper = shallow(<Child />) // shallow - returns a light-weight representation of what component renders
    expect(wrapper).toMatchSnapshot();
  })

  it("the initial length of todos array should be zero", () => {
    const wrapper = shallow(<Child />) // 
    const countTodosLength = wrapper.state().todos.length
    expect(countTodosLength).toEqual(0)
  })

  it("text value of button tag should be Add", () => {
    const wrapper = shallow(<Child />)
    const text = wrapper.find(".add_text_btn").text()
    expect(text).toEqual("Add")
  })

  it("it triggers the text", () => {
    const wrapper = mount(<Child />) // mount - returns a full DOM representation of the component
    wrapper
      .find('.show_text_btn')
      .simulate('click')
    const para = wrapper.find('.para').text()
    expect(para).toEqual("I love React")
  })

})