document.addEventListener('DOMContentLoaded', function() {
    const formBuilder = document.getElementById('form-builder');
    const formPreview = document.getElementById('generated-form');
    let formElements = 0;
  
    function addTextInput() {
      const input = document.createElement('input');
      input.type = 'text';
      input.name = `input_${formElements}`;
      formElements++;
      formPreview.appendChild(input);
    }
  
    function addCheckbox() {
      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = `checkbox_${formElements}`;
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode('Checkbox'));
      formElements++;
      formPreview.appendChild(label);
    }
  
    function addRadioButton() {
      const label = document.createElement('label');
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `radio_${formElements}`;
      label.appendChild(radio);
      label.appendChild(document.createTextNode('Radio Button'));
      formElements++;
      formPreview.appendChild(label);
    }

   {
        // Your form builder logic here
      
        // Function to add an image input dynamically
        function addImageInput() {
          const input = document.createElement('input');
          input.type = 'file';
          input.name = `image_${formElements}`;
          input.accept = 'image/*'; // Specify that only image files can be selected
          input.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = function() {
                const preview = document.createElement('img');
                preview.src = reader.result;
                // Customize the preview as needed, e.g., set width and height
                preview.style.width = '100 px';
                preview.style.height = '100px';
                formPreview.appendChild(preview);
              };
              reader.readAsDataURL(file);
            }
          });
          formElements++;
          formPreview.appendChild(input);
        }
      
        // Button to add an image input
        // const addImageBtn = document.createElement('button');
        // addImageBtn.textContent = 'Add Image';
        // addImageBtn.addEventListener('click', addImageInput);
        // formBuilder.appendChild(addImageBtn);
      }
{
    function addSignImageInput() {
        const input = document.createElement('input');
        input.type = 'file';
        input.name = `image_${formElements}`;
        input.accept = 'image/*'; // Specify that only image files can be selected
        input.addEventListener('change', function(event) {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = function() {
              const preview = document.createElement('img');
              preview.src = reader.result;
              // Customize the preview as needed, e.g., set width and height
              preview.style.width = '100 px';
              preview.style.height = '50 px';
              formPreview.appendChild(preview);
            };
            reader.readAsDataURL(file);
          }
        });
        formElements++;
        formPreview.appendChild(input);
      }
      // const addSignImageBtn = document.createElement('button');
      //   addSignImageBtn.textContent = 'Add Image';
      //   addSignImageBtn.addEventListener('click', addImageInput);
      //   formBuilder.appendChild(addSignImageBtn);
}
      

      
  
    function submitForm() {
      // Handle form submission here if needed
      alert('Form submitted!');
    }
    
    document.getElementById('add-text-input').addEventListener('click', addTextInput);
    document.getElementById('add-checkbox').addEventListener('click', addCheckbox);
    document.getElementById('add-radio').addEventListener('click', addRadioButton);
    document.getElementById('add-image').addEventListener('click', addImageInput);
    document.getElementById('add-sign-image').addEventListener('click', addSignImageInput);
    document.getElementById('submit-form').addEventListener('click', submitForm);
  });