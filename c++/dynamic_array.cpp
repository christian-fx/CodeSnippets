#include <iostream>

using namespace std;

class dynamicArray {
private:
    int* data;
    int capacity;
    int size;

public:
    dynamicArray() {
        capacity = 2;
        size = 0;
        data = new int[capacity];
    };

    ~dynamicArray() {
        delete[] data;
    };

    void push_back(int value) {
        if(size == capacity) {
            capacity = capacity * 2;
            int* newData = new int[capacity];
            for(int i = 0; i < size; i++) {
                newData[i] = data[i];
            };
            delete[] data;
            data = newData;
        }
        data[size] = value;
        size++;
    };

    int get(int index) {
        if(index < 0 || index >= size) {
            cout << "Index out of bounnds" << endl;
            return -1;
        };
        return data[index];
    }

    int getSize() {
        return size;
    }

    int getCapacity() {
        return capacity;
    }

    int pop_back() {
        if(size > 0) {
            return data[size];
            size--;
        }
    }

    void set(int index, int value) {
        if(index >= 0 && index < size) {
            data[index] = value;
        }else{
            cout << "index out of bounds" << endl;
        }
    }

    int find(int value) {
        for(int i = 0; i < size; i++) {
            if(data[i] == value) {
                return i;
            }
        }
        return -1;
    }

    void clear() {
        size = 0;
    }
};