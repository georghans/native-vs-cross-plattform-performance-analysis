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
