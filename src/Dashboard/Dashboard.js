import React from 'react';
import './dashboard.css';
import DashboardNavBar from './DashboardNavBar.js';
const Dashboard = () => {
  return (
    <section className="dashboard-container">
      <DashboardNavBar />

      <div className="user-name">
        <h4>Hello, John!</h4>
        <button className="user-name-cta">
          <iconify-icon class="iconify" icon="carbon:add"></iconify-icon>
          <p>Add Money</p>
        </button>
      </div>

      <main className="wallet-overview">
        <header className="wallet-header">
          <h6>Account Summary</h6>
        </header>
        <div className="wallet-container">
          <div className="wallet wallet-1">
            <header>
              <p>Total Pension Balance</p>
            </header>

            <h4>&#8358;1,000,000</h4>

            <span className="wallet-1-cta">
              <button>
                <iconify-icon class="iconify" icon="carbon:add"></iconify-icon>
                <p>Add Money</p>
              </button>
              <button>
                <iconify-icon
                  class="iconify"
                  icon="ri:file-history-fill"
                ></iconify-icon>
                <p>History</p>
              </button>
            </span>
          </div>

          <div className="wallet wallet-2">
            <header>
              <p>Available For Withdrawal:</p>
            </header>

            <h4>&#8358;1,000,000</h4>

            <span className="wallet-2-cta">
              <button>
                <iconify-icon class="iconify" icon="carbon:add"></iconify-icon>
                <p>Withdraw</p>
              </button>
            </span>
          </div>
        </div>
      </main>

      <footer className="wallet-history">
        <header className="wallet-header">
          <h6>Account History</h6>
        </header>
        <table class="apartments-list">
          <thead>
            <tr>
              <th>Invoice Id</th>
              <th>Mode Of Payment</th>
              <th>Type</th>
              <th>Status</th>
              <th>Amount (&#8358;)</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="apartment-id payment id">
                <p>#111111</p>
              </td>

              <td class="name">
                <p>Bank Transfer</p>
              </td>

              <td class="type">
                <p> Deposited</p>
              </td>

              <td class="payment-status">
                <p> Pending</p>
              </td>

              <td class="date-added">
                <p>10000</p>
              </td>

              <td class="date-added">
                <p>10th Jan, 2022</p>
              </td>

              <td class="action-options payment-actions">
                <iconify-icon
                  class="action-icon"
                  icon="carbon:overflow-menu-vertical"
                ></iconify-icon>
              </td>
            </tr>

            <tr>
              <td class="apartment-id payment id">
                <p>#111111</p>
              </td>

              <td class="name">
                <p>Bank Transfer</p>
              </td>

              <td class="type">
                <p> Deposited</p>
              </td>

              <td class="payment-status">
                <p> Pending</p>
              </td>

              <td class="date-added">
                <p>10000</p>
              </td>

              <td class="date-added">
                <p>10th Jan, 2022</p>
              </td>
              
              <td class="action-options payment-actions">
                <iconify-icon
                  class="action-icon"
                  icon="carbon:overflow-menu-vertical"
                ></iconify-icon>
              </td>
            </tr>
          </tbody>
        </table>
      </footer>
    </section>
  );
};

export default Dashboard;
