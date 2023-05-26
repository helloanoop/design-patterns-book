# Strategy Design Pattern

The Strategy design pattern is a behavioral design pattern in computer science. It allows you to define a family of algorithms, encapsulate each one of them, and make them interchangeable. The strategy pattern enables the algorithm to vary independently of the clients that use it.

The key idea behind the Strategy pattern is to separate the behavior (algorithm) from the context in which it is used. This separation provides flexibility and promotes code reusability.

### How it works
-  Define the Strategy interface: This interface declares the operations that all concrete strategies must implement. It acts as a contract for all the algorithms.
- Implement the Concrete Strategies: These are the different algorithms that implement the Strategy interface. Each strategy represents a specific behavior or algorithm.
- Create a Context class: The Context class represents the context in which the strategies are used. It has a reference to the Strategy interface and can invoke the algorithm defined by the strategy.
- Set the strategy at runtime: The context class allows the client to set or change the strategy at runtime, depending on the desired behavior.

### Benefits
- Improved code maintainability: It allows you to encapsulate each algorithm separately, making it easier to modify or add new algorithms without affecting the client code.
- Code reuse: Strategies can be shared and reused across different contexts.
- Runtime flexibility: The strategy can be changed dynamically at runtime, allowing the system to adapt to different scenarios or requirements.

### Use cases
- Sorting algorithms
- File compression strategies
- Payment processing systems.

### Code Example
```java
// Step 1: Define the Strategy interface
interface SortingStrategy {
    void sort(int[] array);
}

// Step 2: Implement the Concrete Strategies
class BubbleSortStrategy implements SortingStrategy {
    public void sort(int[] array) {
        System.out.println("Sorting array using Bubble Sort");
        // Bubble Sort implementation
    }
}

class QuickSortStrategy implements SortingStrategy {
    public void sort(int[] array) {
        System.out.println("Sorting array using Quick Sort");
        // Quick Sort implementation
    }
}

// Step 3: Create a Context class
class SortContext {
    private SortingStrategy sortingStrategy;

    public void setSortingStrategy(SortingStrategy sortingStrategy) {
        this.sortingStrategy = sortingStrategy;
    }

    public void executeSort(int[] array) {
        sortingStrategy.sort(array);
    }
}

// Step 4: Usage example
public class StrategyPatternExample {
    public static void main(String[] args) {
        int[] array = {5, 2, 8, 1, 9};

        SortContext context = new SortContext();

        // Use Bubble Sort strategy
        context.setSortingStrategy(new BubbleSortStrategy());
        context.executeSort(array);

        // Use Quick Sort strategy
        context.setSortingStrategy(new QuickSortStrategy());
        context.executeSort(array);
    }
}

```

Source: ChatGPT
