import json
from treeSorted import tree
from getCitiesLatLng import getPathCitiesLatLng

def make_visited_false(tree):
    """
    Makes values of all cities to false in visited dictionary
    adj: adjacent dictionary
    returns nothing
    """
    visited={}
    for city in tree:
        visited[city]=False
    return visited

def DFS(initial_state, goal_state, parent={}, visited={}):
    """
    Applys depth first search algorithm to the given graph
    initial_state: is the start city
    goal_state: the city the user want to reach
    """
    visited[initial_state]=True

    # base case
    if initial_state==goal_state:
        return parent

    # recursive case
    for neighbour in tree[initial_state]:
        if visited[neighbour]==False:
            parent[neighbour]=initial_state
            parent= DFS(neighbour, goal_state, parent, visited)
    return parent




def get_DFSpath(initial_state = 'Al Husayniyah', goal_state = 'Halwan'):
    """
    Takes two cities and returns the route between the chosen cities
    initial_state: is the start city
    goal_state: the city the user want to reach

    """
    path=[]

    visited=make_visited_false(tree)
    parent=dict()
    parent=DFS(initial_state, goal_state, parent, visited)
    while goal_state != initial_state:
        path.append(goal_state)
        goal_state=parent[goal_state]
    path.reverse()
    path = [initial_state] + path
    return getPathCitiesLatLng(path)



if __name__ == '__main__':
    pass
