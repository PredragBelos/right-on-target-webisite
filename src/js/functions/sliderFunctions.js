//---------- sliderFunctions

// Function for changing slider data
let data_index = 0;
export const changeSliderData = (slider_data, set_title, set_text, set_img, set_link) => {

    // Setting slider data
    set_title(slider_data[data_index].title);
    set_text(slider_data[data_index].text);
    set_img(slider_data[data_index].image);
    set_link(slider_data[data_index].news_id);

    // Setting infinite slider loop
    (data_index > slider_data.length - 2) ? data_index = 0 : data_index++;
}

// Function for seting slider interval on load page
export const setSliderInterval = (
    slider_data,
    interval,
    set_title,
    set_text,
    set_img,
) => {
    changeSliderData(slider_data, set_title, set_text, set_img);
    setInterval(() => { changeSliderData(slider_data, set_title, set_text, set_img) }, interval);
}