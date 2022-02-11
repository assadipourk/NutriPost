async function newFormHandler(event) {
  event.preventDefault();

  const workout = document.querySelector('input[name="workout"]').value;
  const breakfast = document.querySelector('input[name="breakfast"]').value;
  const lunch = document.querySelector('input[name="lunch"]').value;
  const dinner = document.querySelector('input[name="dinner"]').value;
  const dessert = document.querySelector('input[name="dessert"]').value;
  const dailylog = document.querySelector('#dailylog').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      workout,
      breakfast,
      lunch,
      dinner,
      dessert,
      dailylog,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);