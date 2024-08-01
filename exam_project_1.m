% Name: <Kika Kita>
%__________________________________________________________________________
clc;clear;
%
%
%size of the matrix
n = 100;

%time steps
steps= 200;

%initial square grid
A = zeros(n,n);

%random row number(1 in the name is the 1st infected, 2 is the second one)
%randperm to make sure the 2 randomly generated numbers wont be equal
r= randperm(n,2);

%random column number(same numbering as for rows)
c= randperm(n,2);

%(a)
%matrix with 2 infected people
A(r(1),c(1))= 1;
A(r(2),c(2))= 1;

%__________________________________________________________________________
%(b)&(c)
beta = 0.14;
gamma = 0.07;

%cell to be able to see the time evolution of our system
f = cell(1,steps);

%initial state with 2 randomly infected individuals
f{1,1} = A;

tic
%loop for the time evolution
for t=2:steps
   
    %find location of positive individuals
    [row,column] = find(A==1);
    
    %how many infected individuals
    s_r=numel(row);
    s_c=numel(column);
    
    %number of infected individuals(variable just out of convenience :D):
    N = s_c;

    %random number generator for comparison w/ the probability
    %of infecting/recovering each individual
        yn_rec=rand(1,N);
        yn_inf=rand(1,N);
    
    %loop for rows
     for  i=1:n
    %loop for columns
     for  j=1:n
        %loop for collumns/rows in the vector of infected individuals
            for u=1:N
                %boundary condition to make sure we arent at 
                %the edge of our map
                if column(u)<n %infecting to the right
                    %infection
                %randomly generated number for the individual with
                %corresponding column&row coordinate must be smaller than
                %the probability to infect others(beta)
                %and
                %the last column must be = 0
                    if (yn_inf(1,u)<beta) && (A(i,n)<1)
                        A(row(u),column(u)+1)=1;
                    end
                end
                if column(u)>1 %infecting to the left
                    %infection
                %randomly generated number for the individual with
                %corresponding column&row coordinate must be smaller than
                %the probability to infect others(beta)
                %and
                %the 1st column must be = 0
                    if (yn_inf(1,u)<beta) && (A(i,1)<1)
                        A(row(u),column(u)-1)=1;
                    end
                end
                %boundary condition to make sure we arent at 
                %the edge of our map
                if row(u)<n %infecting downwards
                    %infection
                    %analogically as with the riht/left infection
                    %and
                    %the last row must be = 0
                    if (yn_inf(1,u)<beta) && (A(n,j)<1)
                        A(row(u)+1,column(u))=1;
                    end
                end
                if row(u)>1 %infecting upwards
                    %infection
                    if (yn_inf(1,u)<beta) && (A(1,j)<1)
                        A(row(u)-1,column(u))=1;
                    end
                end
                %recovery
                %analogically as w/ the infection part but w/ the gamma
                if yn_rec(1,u)<gamma
                    A(row(u),column(u))=2; 
                end
            end
     end
     end    
    %write the current state into the corresponding cell element 
    %aka the time evolution of matrix A
    f{1,t} = A;

    %plot of current state at t=1, t=65 & t=200
    figure(1)
    subplot(2,3,1);
    pcolor(f{1,1});
    title('t=1')

    subplot(2,3,2);
    pcolor(f{1,65});
    title('t=65')

    subplot(2,3,3);
    pcolor(f{1,200});
    title('t=200')

    %animated version
    figure(2);
    pcolor(A);
    pause(0.1)
end
toc