import React from 'react';

class FollowUnfollowContainer extends React.Component {
  render() {
    // Render the FollowUnfollowContainer component
    return (
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', marginTop: '10%' }}>

        {/* Render the UnFollowButton component */}
        <UnFollowButton />
      </div>
    );
  }
}

class UnFollowButton extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state with isFollowing set to false
    this.state = {
      isFollowing: false,
    };
  }

  // Function to handle the follow button click
  handleFollowClick = () => {
    // Set isFollowing to true when the follow button is clicked
    this.setState({ isFollowing: true });
    // Add your follow logic here
  };

  // Function to handle the unfollow button click
  handleUnfollowClick = () => {
    // Set isFollowing to false when the unfollow button is clicked
    this.setState({ isFollowing: false });
    // Add your unfollow logic here
  };

  render() {
    const { isFollowing } = this.state;
    return (
      <div>
        {/* Conditional rendering of follow or unfollow button based on isFollowing state */}
        {isFollowing ? (
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={this.handleUnfollowClick}>
           Unconnect
          </button>
        ) : (
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full" onClick={this.handleFollowClick}>
            Connect
          </button>
        )}
      </div>
    );
  }
}

export default FollowUnfollowContainer;
