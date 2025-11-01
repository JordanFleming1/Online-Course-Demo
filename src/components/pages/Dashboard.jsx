function Dashboard() {
  return (
    <div className="container">
      <h2 className="mb-4">Demo User Dashboard</h2>
      <p>Welcome, Demo User! Here are your enrolled courses and progress.</p>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-lg" style={{background:'#fff', border:'none'}}>
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Web Development" style={{height:'120px',objectFit:'cover'}} />
            <div className="card-body">
              <h5 className="card-title" style={{color:'#1976d2', fontWeight:'bold'}}>Web Development Bootcamp</h5>
              <div className="progress mb-2" style={{height:'8px'}}>
                <div className="progress-bar bg-success" style={{width:'80%'}}></div>
              </div>
              <span className="badge bg-success">80% Complete</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-lg" style={{background:'#fff', border:'none'}}>
            <img src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Cybersecurity" style={{height:'120px',objectFit:'cover'}} />
            <div className="card-body">
              <h5 className="card-title" style={{color:'#1976d2', fontWeight:'bold'}}>Cybersecurity</h5>
              <div className="progress mb-2" style={{height:'8px'}}>
                <div className="progress-bar bg-warning" style={{width:'40%'}}></div>
              </div>
              <span className="badge bg-warning text-dark">40% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
