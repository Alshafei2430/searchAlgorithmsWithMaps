from getCityNeighboursLatLng import getPathCitiesLatLng

def make_visited_false(tree):
    """
    Makes values of all cities to false in visited dictionary
    tree: treeacent dictionary
    returns nothing
    """
    visited={}
    for city in tree:
        visited[city]=False
    return visited

def BFS(initial_state, goal_state):
    """
    Applys breadth first search algorithm to the given graph
    initial_state: is the start city
    goal_state: the city the user want to reach
    returns a dict. of cities each city as a key with its parent city as a value
    """
    parent = {}
    queue = []

    from treeSorted import tree
    visited = make_visited_false(tree)
    visited[initial_state] = True
    queue.append(initial_state)


    while queue:
        city = queue.pop(0)

        for neighbour in tree[city]:
            if visited[neighbour] == False:
                visited[neighbour] = True
                parent[neighbour] = city

                queue.append(neighbour)
                if neighbour == goal_state:
                    return parent


def get_path(initial_state = 'Al Husayniyah', goal_state = 'Halwan'):
    """
    Takes two cities and returns the route between the chosen cities
    initial_state: is the start city
    goal_state: the city the user want to reach
    returns the path from the start city to the goal city
    """
    path = []  # path from the start city to the goal city
    parent =  BFS(initial_state, goal_state)

    while goal_state != initial_state:
        path.append(goal_state)
        goal_state = parent[goal_state]
    path.reverse()
    path = [initial_state] + path

    # returns the path with latitude and longitude of each city
    return getPathCitiesLatLng(path)


if __name__ == '__main__':
    pass
