const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAppointments = async () => {
  const res = await fetch(`${BASE_URL}/appointments`);
  return res.json();
};

export const addAppointment = async (data) => {
  const res = await fetch(`${BASE_URL}/appointments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
};
