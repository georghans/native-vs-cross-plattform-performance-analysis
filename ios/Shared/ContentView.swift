//
//  ContentView.swift
//  Shared
//
//  Created by Georg Hans on 15

import Foundation
import SwiftUI

struct ContentView: View {
    // 1.
    @ObservedObject var fetch = FetchToDo()
    @ObservedObject var calculated = CalculatePrimes()
    
    var body: some View {
        Button("Start") {
            calculated.calculatePrimes()
        }
        Text("Calculated " + String(calculated.N) + " primes in milliseconds: " + String(calculated.time))
        Text(calculated.primesString)
    }
}


//struct ContentView: View {
//    // 1.
//    @ObservedObject var fetch = FetchToDo()
//    @ObservedObject var calculated = CalculatePrimes()
//
//    var body: some View {
//        VStack {
//            List(calculated.p,rimes) { prime in
//                Text(prime)
//            }
//            // 2.
//            List(fetch.todos) { todo in
//                VStack(alignment: .leading) {
//                    // 3.
//                    Text(todo.title)
//                    Text("\(todo.completed.description)") // print boolean
//                        .font(.system(size: 11))
//                        .foregroundColor(Color.gray)
//                }
//            }
//        }
//    }
//}
