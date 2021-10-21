//
//  ViewModel.swift
//  ios-native
//
//  Created by Georg Hans on 15.07.21.
//

import Foundation

struct Todo: Codable, Identifiable {
    public var id: Int
    public var title: String
    public var completed: Bool
}

class CalculatePrimes : ObservableObject {
    @Published var N = 10000
    @Published var primes = [Int](repeating: 0, count: 10000)
    @Published var primesString = ""
    @Published var time: UInt64 = 0
    @Published var loading = false;
    var j = 0;
    
    init() {
//        let t0 = DispatchTime.now()
//        for _ in 1..<N {
//            var foundPrime = false;
//            while (!foundPrime) {
//                j += 1
//                if(isPrime(n: j)){
//                    self.primes.append(j)
//                    self.primesString.append(String(j) + ",")
//                    foundPrime = true
//                }
//            }
//        }
//        time = (DispatchTime.now().uptimeNanoseconds - t0.uptimeNanoseconds) / 1_000_000
    }
    
    func calculatePrimes() {
        loading = true
        primes = []
        primesString = ""
        j = 0
        let t0 = DispatchTime.now().uptimeNanoseconds
        for _ in 1..<N {
            var foundPrime = false;
            while (!foundPrime) {
                j += 1
                if(isPrime(n: j)){
                    self.primes.append(j)
                    self.primesString.append(String(j) + ",")
                    foundPrime = true
                }
            }
        }
        time = (DispatchTime.now().uptimeNanoseconds - t0) / 1_000_000
        loading = false
    }
    
    func isPrime(n: Int) -> Bool {
        if (n <= 1) {
            return false;
        }
        if (n == 2){
            return true;
        }
        if (n % 2 == 0){
            return false;
        }
        
        for i in stride(from: 3, through: sqrt(Double(n)), by: 2) {
            if (n % Int(i) == 0) {
                return false;
            }
        }
        return true;
    }
}

class FetchToDo: ObservableObject {
    // 1.
    @Published var todos = [Todo]()
     
    init() {
        let url = URL(string: "https://jsonplaceholder.typicode.com/todos")!
        // 2.
        URLSession.shared.dataTask(with: url) {(data, response, error) in
            do {
                if let todoData = data {
                    // 3.
                    let decodedData = try JSONDecoder().decode([Todo].self, from: todoData)
                    DispatchQueue.main.async {
                        self.todos = decodedData
                    }
                } else {
                    print("No data")
                }
            } catch {
                print("Error")
            }
        }.resume()
    }
}
