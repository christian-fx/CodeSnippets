# 🧱 vec-from-scratch

> A hand-rolled dynamic array in C++ — built without `<vector>`, just raw pointers and ambition.

---

## What is this?

`vec-from-scratch` is a from-the-ground-up implementation of a dynamic array data structure in C++, similar to `std::vector`. It manages its own heap memory, handles automatic resizing, and exposes a clean interface for common array operations.

Built as a learning exercise to deeply understand:
- Manual heap allocation (`new` / `delete[]`)
- Amortized O(1) insertion via capacity doubling
- Object lifecycle management (RAII via constructor/destructor)

---

## Features

| Method | Description |
|---|---|
| `push_back(int val)` | Appends a value; resizes if at capacity |
| `pop_back()` | Removes the last element |
| `get(int index)` | Returns element at index (bounds-checked) |
| `set(int index, int val)` | Updates element at index (bounds-checked) |
| `insert(int index, int val)` | Inserts value at index, shifting elements right; resizes if needed |
| `remove(int index)` | Removes element at index, shifting elements left |
| `find(int val)` | Returns first index of value, or `-1` |
| `clear()` | Resets size to 0 (O(1)) |
| `getSize()` | Returns current number of elements |
| `getCapacity()` | Returns current allocated capacity |

---

## How resizing works

The array starts with a capacity of `2`. When it fills up, capacity **doubles** before the next insert:

```
push #1 → size: 1 / capacity: 2
push #2 → size: 2 / capacity: 2
push #3 → RESIZE → size: 3 / capacity: 4
push #5 → RESIZE → size: 5 / capacity: 8
```

This gives **amortized O(1)** time per insertion — each element is copied at most O(log n) times total across all resizes.

---

## Usage

```cpp
#include "dynamic_array.cpp"

int main() {
    DynamicArray arr;

    arr.push_back(10);
    arr.push_back(20);
    arr.push_back(30);

    std::cout << arr.get(1);      // 20
    std::cout << arr.getSize();   // 3
    std::cout << arr.find(30);    // 2

    arr.set(0, 99);
    arr.pop_back();

    arr.insert(1, 50);            // [99, 50, 20]
    std::cout << arr.get(1);      // 50

    arr.remove(0);                // [50, 20]
    std::cout << arr.getSize();   // 2
}
```

---

## Build & Run

No dependencies. Compile with any C++11-compatible compiler:

```bash
g++ -std=c++11 dynamic_array.cpp -o arr && ./arr
```

---

## Roadmap / Planned Improvements

- [x] Fix bounds check bug in `get()`
- [x] Fix operator bug in `set()`
- [x] Add `insert(index, value)` and `remove(index)` methods
- [x] Fix `pop_back()` — return statement is before `size--` (unreachable code)
- [ ] Implement copy constructor & copy assignment (Rule of Three)
- [ ] Shrink capacity when size drops below 25% of capacity
- [ ] Template support — `DynamicArray<T>` instead of `int` only
- [ ] Unit tests

---

## Author

**Osmond** · [GitHub](https://github.com/OsmondJnr) · [Portfolio](https://dev-osmond.vercel.app)

---

> *"What I cannot create, I do not understand." — Richard Feynman*
