const BASE_URL = 'http://localhost:3000/post';

export const PostService = {
  async getAll(token: string, page = 1, limit = 10) {
    const res = await fetch(`${BASE_URL}?page=${page}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  },

  async getById(token: string, id: number) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  },

  async create(token: string, data: any) {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  async update(token: string, data: any) {
    const res = await fetch(BASE_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  async delete(token: string, id: number) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  },
};